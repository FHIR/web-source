#!/usr/bin/perl
print "Content-type: text/html\n\n";

# Get query parameters
my $query_string = $ENV{'QUERY_STRING'};
my %params;
foreach (split(/&/, $query_string)) {
    my ($key, $value) = split(/=/, $_);
    $params{$key} = $value;
}

# Set file paths
my $oldfile = "/tmp/htmldiff_old_$$.html";
my $newfile = "/tmp/htmldiff_new_$$.html";

# Call system commands to get the files
system("wget -q -O $oldfile $params{oldfile}");
system("wget -q -O $newfile $params{newfile}");

# Run htmldiff
system("/usr/lib/cgi-bin/htmldiff.pl $oldfile $newfile");

# Clean up
unlink($oldfile);
unlink($newfile);