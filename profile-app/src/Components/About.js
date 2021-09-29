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


export {Education, Languages};
export default Education;