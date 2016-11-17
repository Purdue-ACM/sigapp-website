import React from 'react';

const TutorialEntry = (props) => {
    var link;
    if(props.link) {
        link = <td><a href={props.link}>Link</a></td>
    } else {
        link = <td></td>
    }

    return (
    <tr>
        <td>{props.date}</td>
        <td>{props.name}</td>
        {link}
    </tr>
  )
}

export default TutorialEntry;
