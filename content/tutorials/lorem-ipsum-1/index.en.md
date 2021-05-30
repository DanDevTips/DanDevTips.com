---
title: "Lorem Ipsum 1 (US)"
description: ""
date: 2021-05-29T03:24:58-03:00
lastmod: 2021-05-29T03:24:58-03:00
draft: false
images: []
url: /tutorials/lorem-ipsum-1
---


## Scene

Setup a basic fullscreen scene using the example from the official docs:

{{< file "js" "/src/components/" "index.js" >}}
{{< highlight html "linenos=table"  >}}
<body bgcolor="#FFFFFF" text="#000000" link="#0000CC">
    <h1>abc</h1>
    <h2>def</h2>
    <p>Testing page</p>
</body>
{{< /highlight >}}


{{< file "html" "/src/" "file.js"  >}}
{{< highlight javascript "linenos=table,hl_lines=8 12-16,linenostart=199"  >}}
/**
sample javascript from xui
*/

var undefined,
    xui,
    window     = this,
    string     = new String('string'),
    document   = window.document,
    simpleExpr = /^#?([\w-]+)$/,
    idExpr     = /^#/,
    tagExpr    = /<([\w:]+)/,
    slice      = function (e) { return [].slice.call(e, 0); };
    try { var a = slice(document.documentElement.childNodes)[0].nodeType; }
    catch(e){ slice = function (e) { var ret=[]; for (var i=0; e[i]; i++)
        ret.push(e[i]); return ret; }; }

window.x$ = window.xui = xui = function(q, context) {
    return new xui.fn.find(q, context);
};
{{< /highlight >}}





{{< highlight php "linenos=table" >}}
<?php
require_once($GLOBALS['g_campsiteDir']. "/$ADMIN_DIR/country/common.php");
require_once($GLOBALS['g_campsiteDir']. "/classes/SimplePager.php");
camp_load_translation_strings("api");

$f_country_language_selected = camp_session_get('f_language_selected', '');
$f_country_offset = camp_session_get('f_country_offset', 0);
if (empty($f_country_language_selected)) {
    $f_country_language_selected = null;
}
$ItemsPerPage = 20;
$languages = Language::GetLanguages(null, null, null, array(), array(), true);
$numCountries = Country::GetNumCountries($f_country_language_selected);

$pager = new SimplePager($numCountries, $ItemsPerPage, "index.php?");

$crumbs = array();
$crumbs[] = array(getGS("Configure"), "");
$crumbs[] = array(getGS("Countries"), "");
echo camp_html_breadcrumbs($crumbs);

?>

<?php  if ($g_user->hasPermission("ManageCountries")) { ?>
<table BORDER="0" CELLSPACING="0" CELLPADDING="1">
    <tr>
        <td><a href="add.php"><?php putGS("Add new"); ?></a></td>
    </tr>
</table>
{{< /highlight >}}




{{< highlight python "linenos=table" >}}
# test python (sample from offlineimap)

class ExitNotifyThread(Thread):
    """This class is designed to alert a "monitor" to the fact that a thread has
    exited and to provide for the ability for it to find out why."""
    def run(self):
        global exitthreads, profiledir
        self.threadid = thread.get_ident()
        try:
            if not profiledir:          # normal case
                Thread.run(self)
            else:
                try:
                    import cProfile as profile
                except ImportError:
                    import profile
                prof = profile.Profile()
                try:
                    prof = prof.runctx("Thread.run(self)", globals(), locals())
                except SystemExit:
                    pass
                prof.dump_stats( \
                            profiledir + "/" + str(self.threadid) + "_" + \
                            self.getName() + ".prof")
        except:
            self.setExitCause('EXCEPTION')
            if sys:
                self.setExitException(sys.exc_info()[1])
                tb = traceback.format_exc()
                self.setExitStackTrace(tb)
        else:
            self.setExitCause('NORMAL')
        if not hasattr(self, 'exitmessage'):
            self.setExitMessage(None)

        if exitthreads:
            exitthreads.put(self, True)

    def setExitCause(self, cause):
        self.exitcause = cause
    def getExitCause(self):
        """Returns the cause of the exit, one of:
        'EXCEPTION' -- the thread aborted because of an exception
        'NORMAL' -- normal termination."""
        return self.exitcause
    def setExitException(self, exc):
        self.exitexception = exc
    def getExitException(self):
        """If getExitCause() is 'EXCEPTION', holds the value from
        sys.exc_info()[1] for this exception."""
        return self.exitexception
    def setExitStackTrace(self, st):
        self.exitstacktrace = st
    def getExitStackTrace(self):
        """If getExitCause() is 'EXCEPTION', returns a string representing
        the stack trace for this exception."""
        return self.exitstacktrace
    def setExitMessage(self, msg):
        """Sets the exit message to be fetched by a subsequent call to
        getExitMessage.  This message may be any object or type except
        None."""
        self.exitmessage = msg
    def getExitMessage(self):
        """For any exit cause, returns the message previously set by
        a call to setExitMessage(), or None if there was no such message
        set."""
        return self.exitmessage
{{< /highlight >}}



## asdas


{{< btn-copy text="bin\cake jwt --email=dan.gasperoni@gmail.com" >}}
```bash
bin\cake jwt --email=dan.gasperoni@gmail.com
```


```bash
docker build -t getting-started .
```

{{< highlight xml "linenos=table"  >}}
<body bgcolor="#FFFFFF" text="#000000" link="#0000CC">
    <h1>abc</h1>
    <h2>def</h2>
    <p>Testing page</p>
</body>
</html>
{{< /highlight >}}
