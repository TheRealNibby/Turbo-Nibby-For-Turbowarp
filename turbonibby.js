// most of this code is just from turbowarp
class turbonibby {
  getInfo() {
    return {
      id: 'nibbygithub',
      name: 'Turbo Nibby',
	  docsURI: 'https://sites.google.com/view/turbo-nibby-docs',
      blocks: [
        {
          opcode: 'nibbygithub',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Check Out My Github'
        }
      ]
    };
  }
  

  nibbygithub() {
    return 'TheRealNibby';
  }
}


 
Scratch.extensions.register(new turbonibby()); 
