---
layout: page
title: "Potential Exploit: NPM Package Dependencies"
---

## Security Notice 

This security notice was issued by the FHIR Product Director on the 17-March 2026. 

## Background

The FHIR ecosystem uses [NPM Packages](https://registry.fhir.org/learn) to distribute
computable content for a number of different types of content:
* The core specification
* Implementation Guides
* IG templates
* Terminology Content
* Miscellaneous binary content

FHIR Packages are based on the Node Package Manager (NPM) standard, but do not contain 
libraries of javascript code; instead, they contain statements of meaning such as 
terminologies, content agreements, and API specifications. 

For reasons of management convenience, the FHIR ecosystem uses its own package 
servers (packages.fhir.org and npm.fhir.org/packages), and all the FHIR distribution
tools look to one of both of these servers, including FHIR specific installers.
Within the FHIR managed ecosystem, we have used globally scoped names (e.g. 
`hl7.fhir.uv.extensions`, `ihe.iti.balp`).

The main NPM package system (http://npmjs.com) is focused on Javascript ecosystem support, 
so we have avoided copying all our packages over there - they don't contain Javascript,
except for a few templates, and those aren't useful as Javascript libraries.

## Reported Exploit 

Because the packages are actually NPM packages, they can be installed by the normal NPM
client (this is not a normal process, but it is useful in some contexts). If the
normal NPM client installs a FHIR package, it will attempt to resolve the dependencies
on the main NPM package server, and fail, since we do not clone the packages to that server.

This allows for an exploit: any person out there might place their own NPM package 
at one of the dependencies, and then the NPM client will install that and execute whatever 
is in the package, which might include executing arbitrary code on the developer's machine
at install time via npm lifecycle scripts

Such an exploit was created as a demonstration and reported to a member of the FHIR community.

There has been no malicious use of the exploit so far as we can determine. 

## Potential Solutions

There are two general solutions to prevent this exploit: 

* Use organization scoped package names rather than global names 
* Register the FHIR packages on the npmjs.com ecosystem

### Using Organizationally Scoped package names 

This prevents anyone from creating packages, since organization access is required 
to create packages with the stated names e.g. `@hl7/hl7.fhir.uv.extensions` can only be 
created by someone who has been given security clearance to add/maintain packages in
the HL7 namespace 

Unfortunately this is not an appropriate solution for all the already published content,
since these packages are already published - published packages are immutable. The
other problem is that existing tools generally do not support organizationally
scoped package names.

### Registering the FHIR packages on npmjs.com

Registering the packages on `npmjs.com` means that the exploit cannot occur, since 
the name is already in use by the correct package. This doesn't require any changes
to the FHIR package tooling or the existing or future packages. 

For this reason, HL7 has registered the current version of all the FHIR packages 
that have been published. Note that a few packages already existed or are blocked;
as far as we can determine, none of these are owned by parties outside the FHIR 
community, with one exception noted below.

HL7 will register all packages published in the FHIR ecosystem on npmj.com going
forward, to ensure that this exploit does not arise again. 

## Actions for HL7

* HL7 registered all the existing FHIR packages 
* HL7 will implement a process to register all future packages on `npmjs.com`
* HL7 has updated the HL7 provided tooling to handle organizationally scoped packages, and will continue to iterate on full support for this

There is a risk of name collision - that some future package will be defined 
that matches a name already found in the NPM packages. For this reason, we will 
encourage the use of organizational scopes in the future, and will work with 
the FHIR tooling vendors to uniformly support organizationally scoped packages

## Actions for implementers 

Valid FHIR Packages *never* have install scripts. If you use the standard npm client to
install FHIR packages, you can add `ignore-scripts=true` to your .npmrc file (located
at `~/.npmrc` on Mac/Linux or `%USERPROFILE%\.npmrc` on Windows), which prevents npm from
executing install-time scripts from any package. Note that this setting may cause issues
if you also use npm for JavaScript development and have packages that require build
scripts (such as packages with native compiled components) — in that case, consider
maintaining a separate `.npmrc` for FHIR-related work, or using `socket.dev` or 
`npx can-i-ignore-scripts`. 

The safest approach is to use the dedicated FHIR package
installers (such as the [Firely terminal](https://simplifier.net/downloads/firely-terminal)
or the [FHIR validator](https://confluence.hl7.org/spaces/FHIR/pages/35718580/Using+the+FHIR+Validator))
rather than the standard npm client for installing FHIR packages, as these tools resolve
dependencies correctly from the FHIR package servers, do not run install scripts, and
are not affected by this issue. T

This advisory does not affect the following FHIR tooling: 
* [FHIR Validator](https://github.com/hapifhir/org.hl7.fhir.core/releases)
* [IG publisher](https://github.com/HL7/fhir-ig-publisher/releases) + [IG Publisher Manager](https://github.com/FHIR/ig-publisher-manager/releases)
* [Sushi](https://github.com/FHIR/sushi/releases)
* [FHIRsmith](https://github.com/HealthIntersections/FHIRsmith/releases)

Note, however, that you should update to the latest versions of thee FHIR Validator and IG publisher
to ensure scoped packages are supported. The other tools are not yet updated; see their updates
for further details.

## Actions for IG Authors

The security researcher who reported the original exploit created a demonstration
malicious package at `fhir.base.template`. This package name is now blocked on `npmjs.com`,
and cannot be used. `fhir.base.template` is the base template that is no longer 
supported, so all IG authors are strongly encourage to move to the new multi-language
template `fhir2.base.template` as their base template. At some stage in the near future,
the IG Publisher will refuse to run for IGs that have a dependency on `fhir.base.template`.

## Actions for FHIR Tooling vendors 

If you use normal NPM client tooling inside your tooling, always invoke it with `--ignore-scripts`,
since FHIR packages never need install scripts. If your tooling uses FHIR packages, release an 
update that supports scoped packages. From the perspective of the FHIR ecosystem, scoped packages 
are just like any other packages except that their package name includes a `/`; in the user's local
FHIR Package Repository, `/` is replaced with `$` when choosing the folder name for the package.
