<?php

    /*
    # H: Hour in 24-hour format with leading zeroes. Values 00 through 23.
    # i: Minute with leading zeroes. Values 00 through 59.
    # s: Seconds with leading zeroes. Values 00 through 59.
    */

    echo date("H:i:s"); 

    /*
    # l: Day as word
    # f: Month as word
    # js: Day as number
    # Y; Year as number
    */

    echo date("l, F jS, Y"); 

    /*
    # d: Day as 2 digits
    # m: Month as 2 digits
    # y; Year as 2 digits
    */

    echo date("m/d/y"); 

?>
