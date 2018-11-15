import requestData from './requestData.json'

export default jest.fn().mockImplementationOnce(() => {
    donations: [
        requestData
    ]
});