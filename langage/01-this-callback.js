
class Contact {
  name = 'Romain';

  hello = () => {
    console.log(`Hello ${this.name}`);
  };

  helloWithCallback() {
    setTimeout(this.hello, 1000);
  }
}


// function Contact(name) {
//   this.name = name;
//   this.hello = this.hello.bind(this);
// }

// Contact.prototype.hello = function() {
//   console.log(`Hello ${this.name}`);
// };

// Contact.prototype.helloWithCallback = function() {
//   setTimeout(this.hello, 1000);
// };

const contact = new Contact();
contact.helloWithCallback();
