/**
 *  Parse and validate event. 
 * @param {*} event AWS lambda handler event
 * @returns empty object
 */
const validateEvent = (event) => {
    console.log('Validating event...')

    console.log('Event validated!')
    // Dummy function for design
    return{}
}


module.exports.handler = async (event) => {
    // Parse and validate event
    const charParams = validateEvent(event)
    
    // Determine Race

    // Determine other attributes

    // Return to user
    console.log('Character generated!')
}

