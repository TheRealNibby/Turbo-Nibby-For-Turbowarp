class turbonibby {
  getInfo() {
    return {
      id: 'nibbygithub',
      name: 'Turbo Nibby',
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