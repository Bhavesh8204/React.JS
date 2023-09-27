import React from "react";
import SetFormFields from './usestate';
import Table from './table';
import { user } from './user'; // Import the user data if it's in a separate file

function Content() {
    return (
        <div className="Content">
            <div className="part-1">
                <SetFormFields />
            </div>
            <div className="part-2">
                <Table bhavesh={user} />
            </div>
        </div>
    )
}

export default Content;
