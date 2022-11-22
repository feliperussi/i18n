import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural } from "react-intl";
// Views with format in english and spanish #,###,###.##

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} 
        <FormattedPlural value={props.offer.salary} one="millon" other="millones"></FormattedPlural>
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
          />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} 
        unitDisplay="narrow"/>
      </td>
    </tr>
  );
};

export default Job;
