class github {
  getInfo() {
    return {
      id: 'github',
      name: 'TheRealNibby',
      blocks: [
        {
          opcode: 'github',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Creators Github Name'
        }
      ]
    };
  }
  [
   
  github() {
    return 'TheRealNibby';
  }
}

Scratch.extensions.register(new HelloWorld());