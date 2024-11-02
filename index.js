const midi = require('midi');

// Create a new output instance
const output = new midi.Output();

// Get the available MIDI output ports
const portCount = output.getPortCount();
console.log("Available MIDI output ports:");
for (let i = 0; i < portCount; i++) {
    console.log(`${i}: ${output.getPortName(i)}`);
}

// Open the first available output port
if (portCount > 0) {
    output.openPort(0);

    // Send a "note on" message (note 60, velocity 127)
    output.sendMessage([0x90, 60, 127]);
    console.log("Note on message sent.");

    // Send a "note off" message after 500ms
    setTimeout(() => {
        output.sendMessage([0x80, 60, 0]);
        console.log("Note off message sent.");
        output.closePort(); // Close the port after sending
    }, 500);
} else {
    console.log("No available MIDI output ports.");
}