const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    'id': String,
    'name': String,
})

const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
    const newUser = await peopleModel.create({
      "id": "02",
      "name": "Johnson",
    })

    // if (event.pathParameters){
    //     const id = event.pathParameters.id;
    //     list = await peopleModel.query('id').eq(id).exec();
    // } else {
    //     const list = await peopleModel.scan().exec();
    // }

    
    const response = {
        statusCode: 200,
        body: JSON.stringify(newUser),
    };
    return response;
};