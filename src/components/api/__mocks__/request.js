import requestData from './requestData.json'

export default jest.fn().mockImplementation(() => {
    return {
        donations: [requestData]
    }
});