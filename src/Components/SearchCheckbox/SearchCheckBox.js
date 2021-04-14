import React from "react";
import { MDBInput, MDBFormInline } from "mdbreact";

export default function SearchCheckBox({ categories, handleChange }) {
  return (
    <div>
      <MDBFormInline className="mb-3">
       
        <h5>Select the Therapist thats right for you.</h5>
      </MDBFormInline>
      <MDBFormInline className="mb-4">
        {Object.keys(categories).map((category) => (
          <MDBInput
            style={{ boxShadow: 'none' }}
            key={category}
            label={categories[category].displayName}
            type="checkbox"
            name={category}
            containerClass="mr-2"
            onChange={handleChange}
          />
        ))}
      </MDBFormInline>
    </div>
  );
}
