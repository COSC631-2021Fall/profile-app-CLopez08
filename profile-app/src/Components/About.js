import '../App.css';

function Education() {
  return (
    <div className="Education">
      <h3>Education</h3>
      <ul>
        <li>Bachelor's of Music In Piano Performance</li>
        <li>Master's of Music In Piano Performance</li>
        <li>Master's of Computer Science (In Progress)</li>
    </ul>
    </div>
  );
}

function Languages() {
    return (
      <div className="Languages">
        <h3>Experience with the following Languages:</h3>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C#</li>
      </ul>
      </div>
    );
  }

  function Contact() {
    return (
      <div className="Contact">
        <h3>Email: </h3>
        <p>clopez12@gmail.com</p>
      </div>
    );
  }


export {Education, Languages, Contact};
export default Education;