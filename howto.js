const howto = {
  nodejs_project_structure:
    "https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i",

  mongodb_import_export: {
    mongodump:
      "mongodump --uri mongodb+srv://<your username>:<your password>@cluster0.beqix.mongodb.net/demo1",
    mongorestore: "mongorestore  dump" || "mormongorestore ./dump/", // restor to locally by default
    mongorestore: "",
    // "mongorestore --uri mongodb+srv://<your username>:<your password>@cluster0.7gdds.mongodb.net/bts-dev  "C:\Users\Admin\dump\bts-dev" -v",

    mongoimport:
      'mongoimport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --drop sales.json',
    mongoexport:
      'mongoexport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --collection=sales --out=sales.json',

    mongoexport:
      " mongoexport --uri mongodb+srv://<your username>:<your password>@cluster0.7gdds.mongodb.net/demo1 --collection=admins --type=json --out d:\result-2.json",
    mongoimport:
      " mongoimport --uri mongodb+srv://<your username>:<your password>@cluster0.beqix.mongodb.net/demo1 --collection=admins --type=json --file d:\result-2.json",
  },
};
