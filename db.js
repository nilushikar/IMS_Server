// import and use mongodb.MongoClient
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbConnectionUrl = 'Vmongodb+srv://ims_user1:supersecret@imsmongodb.34v41.mongodb.net/IMS_DB?retryWrites=true&w=majority';

function initialize(dbName, dbCollectionName, successCallback, failureCallback) {
	MongoClient.connect(dbConnectionUrl, function (err, dbInstance) {
		if (err) {
			console.log(`[MongoDB connection] ERROR: ${err}`);
			failureCallback(err);        // this should be "caught" by the calling function
		} else {
			const dbObject = dbInstance.db(dbName);
			const dbCollection = dbObject.collection(dbCollectionName);

			console.log("[MongoDB connection] SUCCESS");
			successCallback(dbCollection);
		}
	});
}

async function deleteAd(id) {
	if (err) {
		console.log(`[MongoDB connection] ERROR: ${err}`);
		failureCallback(err);        // this should be "caught" by the calling function
	} else {
		const dbObject = dbInstance.db(dbName);
		const dbCollection = dbObject.collection(dbCollectionName);

		console.log("[MongoDB connection] SUCCESS");
		successCallback(dbCollection);
	}
  }

module.exports = { initialize,deleteAd };
