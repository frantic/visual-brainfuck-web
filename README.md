# visual-brainfuck-web

![](imgs/website.jpeg)

A Brainf\*ck interpreter online. Visit [visual-brainfuck-web Github Page](https://zhangzheheng12345.github.io/visual-brainfuck-web) to have a try.
If you don't have any idea about what Brainf\*ck exactly is, visit [Brainf\*ck Wiki](https://esolangs.org/wiki/brainfuck).

### How to use

The triangle button runs the Brainf\*ck code in the large text area. The white square button immediately stops the running program.

* ( Attention! Do not press the run button again while the program is still running. Two programs will run in independent contexts but they will operate the same data area! If you indeed have done such thing, press the stop button to jump out of mess. But pressing the stop button several times won't cause anything bad. )

The grey square button shows or hides the data area. The data area will show you how the program changes the pointer's position and changes the data in an obvious way. ( The darker and bigger block is where the pointer located. )
The data area won't limit the number of the cells.

The slider can change the speed.

The input widget after the printer icon enables you to type your inputs ( `,` command in Brainf\*ck will get the input from here, but you should get the inputs ready before press the **Run** button), and see the outputs ( `.` command in Brainf\*ck will output to here).

The trash bin button enables you to clear the Brainf\*ck code in the text area in a quicker way. Click it, and all the long weird codes will disappear at once.

This interpreter also provides some features which the Brainf**k standard doesn't include. For example, `#` declares a comment which continues to the end of the line. And the maximum value of a memory cell is not 255, but the maximum value of the ``` number ``` type in Javascript.

### License and Thanks

This project is GPL 2.0 licensed and it used to be MIT licensed.

Thanks for [Iconduck](https://iconduck.com) providing such excellent icons. The run icon, stop icon, printer icon, speed showing screen icon, and the trash bin icon are all downloaded from Iconduck. They're all MIT licensed.