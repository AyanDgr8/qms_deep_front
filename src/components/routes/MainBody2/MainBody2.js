// src/components/routes/MainBody/MainBody/MainBody.js

import React, { useState } from "react";
import "./MainBody2.css";

const MainBody2 = () => {
    const [callId, setCallId] = useState("");
    const [callerIdNumber, setCallerIdNumber] = useState("");
    const [extension, setExtension] = useState("");
    const [direction, setDirection] = useState("Inbound");
    const [externalNumber, setExternalNumber] = useState("");
    const [callerIdName, setCallerIdName] = useState("");
    const [callDuration, setCallDuration] = useState("");

    const handleClearClick = () => {
        setCallId("");
        setCallerIdNumber("");
        setExtension("");
        setDirection("Inbound");
        setExternalNumber("");
        setCallerIdName("");
        setCallDuration("");
    };

    const handleSearchClick = () => {
        // Implement search functionality here based on state values
        console.log("Search initiated with the following values:");
        console.log({
            callId,
            callerIdNumber,
            extension,
            direction,
            externalNumber,
            callerIdName,
            callDuration,
        });
    };

    return (
        <div>
            <div className="mainbody-container">
                <div className="mainbody-searchh">
                    <div className="mainb-firstt">
                        <div className="mainb-first-search">
                            <div className="input-group input-group-sm mb-3 sed">
                                <span className="input-group-text phrase-word span-w">Call ID</span>
                                <input
                                    type="text"
                                    className="form-control inp-w"
                                    placeholder="Enter Call ID"
                                    value={callId}
                                    onChange={(e) => setCallId(e.target.value)}
                                />
                            </div>
                            <div className="input-group input-group-sm mb-3 sed">
                                <span className="input-group-text phrase-word span-w">Caller ID Number</span>
                                <input
                                    type="text"
                                    className="form-control inp-w"
                                    placeholder="Enter Caller ID Number"
                                    value={callerIdNumber}
                                    onChange={(e) => setCallerIdNumber(e.target.value)}
                                />
                            </div>
                            <div className="input-group input-group-sm mb-3 sed">
                                <span className="input-group-text phrase-word span-w">Extension</span>
                                <input
                                    type="text"
                                    className="form-control inp-w"
                                    placeholder="Enter Extension"
                                    value={extension}
                                    onChange={(e) => setExtension(e.target.value)}
                                />
                            </div>
                            <div className="input-group input-group-sm mb-3 sed">
                                <span className="input-group-text phrase-word span-w">Direction</span>
                                <select
                                    className="form-select inp-w"
                                    value={direction}
                                    onChange={(e) => setDirection(e.target.value)}
                                >
                                    <option value="Inbound">Inbound</option>
                                    <option value="Outbound">Outbound</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Second Column of Inputs */}
                    <div className="mainb-secondd">
                        <div className="mainb-first-search">
                            <div className="input-group input-group-sm mb-3 sed">
                                <span className="input-group-text phrase-word span-w">External Number</span>
                                <input
                                    type="text"
                                    className="form-control inp-w"
                                    placeholder="Enter External Number"
                                    value={externalNumber}
                                    onChange={(e) => setExternalNumber(e.target.value)}
                                />
                            </div>
                            <div className="input-group input-group-sm mb-3 sed">
                                <span className="input-group-text phrase-word span-w">Caller ID Name</span>
                                <input
                                    type="text"
                                    className="form-control inp-w"
                                    placeholder="Enter Caller ID Name"
                                    value={callerIdName}
                                    onChange={(e) => setCallerIdName(e.target.value)}
                                />
                            </div>
                            <div className="input-group input-group-sm mb-3 sed">
                                <span className="input-group-text phrase-word span-w">Call Duration (secs)</span>
                                <input
                                    type="text"
                                    className="form-control inp-w"
                                    placeholder="Enter Call Duration"
                                    value={callDuration}
                                    onChange={(e) => setCallDuration(e.target.value)}
                                />
                            </div>

                            <div className="srch-btns">
                                <button
                                    type="button"
                                    className="btn btn-secondary clr-srchh"
                                    onClick={handleClearClick}
                                >
                                    Clear
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary clr-srchh"
                                    onClick={handleSearchClick}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBody2;
