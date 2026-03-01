#!/usr/bin/perl
print "Content-type: text/html\n\n";

# Get query parameters
my $query_string = $ENV{'QUERY_STRING'};
my %params;
foreach (split(/&/, $query_string)) {
    my ($key, $value) = split(/=/, $_);
    $params{$key} = $value;
}

# Append index.html if URL ends with / or has no file extension
foreach my $key ('oldfile', 'newfile') {
    ($params{$key} = $params{$key}) =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/ge;
    if ($params{$key} =~ /\/$/ || $params{$key} !~ /\.[a-zA-Z0-9]+$/) {
        $params{$key} .= '/' unless $params{$key} =~ /\/$/;
        $params{$key} .= 'index.html';
    }
}

# Set file paths
my $oldfile = "/tmp/htmldiff_old_$$.html";
my $newfile = "/tmp/htmldiff_new_$$.html";

# Call system commands to get the files (--max-redirect to follow redirects)
system("wget -q --max-redirect=5 -O $oldfile '$params{oldfile}'");
system("wget -q --max-redirect=5 -O $newfile '$params{newfile}'");

# Run htmldiff
system("/usr/lib/cgi-bin/htmldiff.pl $oldfile $newfile");

# Clean up
unlink($oldfile);
unlink($newfile);