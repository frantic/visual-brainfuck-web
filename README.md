# BFWeb

A Brainf\*ck interpreter online. Visit [BFWeb Github Page](https://zhangzheheng12345.github.io/BFWeb) to have a try.
If you don't have any idea about what Brainf\*ck exactly is, visit [Brainf\*ck wiki](https://esolangs.org/wiki/brainfuck).

### How to use

The **Run** button runs the Brainf\*ck code in the large text area. The **Stop** button immediately stops the running program.

The **Show Data**/**Hide Data** button shows or hides the data area. The data area will show you how the program changes the pointer's position and changes the data. ( The black block is where the pointer located.

The input widget after **IO:** enables you to type your inputs ( `,` command in Brainf\*ck will get the input from here, but you should get the inputs ready before press the **Run** button), and see the outputs ( `.` command in Brainf\*ck will output to here).

This interpreter also provides some features which the Brainf**k standard doesn't include. For example, `#` declares a comment which continues to the end of the line. And the maximum number of a memory cell is not 255, but the maximum value of the ``` number ``` type in Javascript.