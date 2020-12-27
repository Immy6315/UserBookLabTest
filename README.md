# UserBookLabTest

Users who need to Book Lab Test/ Book Lab Test Package for them or their Family Member, so they come to Portal and Book the same.


**Explanation:** *Api endpoint for DataSet : https://5f1a8228610bde0016fd2a74.mockapi.io/getTestList*.
## NOTE
After cloning open cmd from that folder and run these commans given below andd your mysql or you can run xampp and run apache and mysql 

# Commands

*1:npm install*
*2:npm run model:migrate*
*3:npm start*

*This is only backend code with pictures for better understanding. In code i have used both rest as well as graphQL API for better performance.*

1. You need to login i have used username and password where username="imran" and password="immy"

you can hit url to get token http://localhost:8081/v1/login as shown in figure and get token for other api's.

![Login](/login.PNG)

2. Now we have graphQL Schema like

``` 
type Query {
    getPackages (in:In):[Package]
    userPackages:[Package]
}
type Package{
    id: Int
    SNo: Int
    itemId: String
    itemName: String
    type: String
    Keyword: String
    BestSellers: String
    testCount: Int
    IncludedTests: String
    url: String
    minPrice: Int
    labName: String
    fasting: Int
    availableAt: Int
    popular: String
    category: String
    objectID: String
}

input In{
    SNo: Int
    itemId: String
    itemName: String
    type: String
    Keyword: String
    url: String
    labName: String
}

type Mutation{
    addPackage(in:addPack):addedPackage!
    deletePackage(in:addPack):Int!
}

type addedPackage{
    id: Int
    packageId: Int
    username: String
    updatedAt: String
    createdAt: String
}

input addPack{
    username:String
    packageId:Int
}

```

## Queries

    # 1. getPackages : 
    It is used to get all packages with filter like SNo, itemId, itemName, type, Keyword, url, labName, userPackages 
    we can get filter as well as all packages information by this query like showed in figure.
    
    # UnAuthentication Error
![GetApi With Token or Wrong Token](/getPackageWithoutTokenOrWrongToken.PNG)
    
    # If Authentication Successfull then Data will be in responce.
    
![GetApi With Token](/getPackageWithToken.PNG)

    # Query Format will be
```
    Write your query or mutation here
query getpackages($input:In){
  getPackages(in:$input){
      id
      SNo
      itemId
      itemName
      type
      Keyword
      BestSellers
      testCount
      IncludedTests
      url
      minPrice
      labName
      fasting
      availableAt
      popular
      category
      objectID
  }
}

Query Variables

{
  "input": {
  }
}

HTTP Headers 
{
  "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImltcmFuIiwiaWF0IjoxNjA5MDY5Nzc3LCJleHAiOjE2MDkxMTI5NzcsImlzcyI6Ik5ldE1lZHMifQ.FG0t-ot-01oou49bshrEumwr88wE6NFyEEXevKnYUJ8"
}

Query Responce 

{
  "data": {
    "getPackages": [
      {
        "id": 1,
        "SNo": 19956,
        "itemId": "DIANM11",
        "itemName": "COVID-19 Test",
        "type": "Test",
        "Keyword": "covid-19-test",
        "BestSellers": "",
        "testCount": 1,
        "IncludedTests": "",
        "url": "covid-19-test",
        "minPrice": 4500,
        "labName": "Metropolis",
        "fasting": 0,
        "availableAt": 1,
        "popular": "TRUE",
        "category": "path",
        "objectID": "6045500"
      },
      {
        "id": 2,
        "SNo": 1995,
        "itemId": "DIA2044",
        "itemName": "Eye Test- Vision Express",
        "type": "Test",
        "Keyword": "eye,test",
        "BestSellers": "",
        "testCount": 1,
        "IncludedTests": "",
        "url": "eye_test",
        "minPrice": 49,
        "labName": "Vision Express",
        "fasting": 0,
        "availableAt": 1,
        "popular": "TRUE",
        "category": "path",
        "objectID": "4562"
      },
      {
        "id": 3,
        "SNo": 1981,
        "itemId": "DIAR892",
        "itemName": "X Ray Wrist AP View",
        "type": "Test",
        "Keyword": "X,Ray,Wrist,AP,View",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Wrist-AP-View-test-cost",
        "minPrice": 120,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461282"
      },
      {
        "id": 4,
        "SNo": 1979,
        "itemId": "DIAR890",
        "itemName": "X Ray Whole Spine Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Whole,Spine,Lateral",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Whole-Spine-Lateral-View-test-cost",
        "minPrice": 320,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461262"
      },
      {
        "id": 5,
        "SNo": 1980,
        "itemId": "DIAR891",
        "itemName": "X Ray Wrist AP and Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Wrist,AP,and",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Wrist-AP-and-Lateral-View-test-cost",
        "minPrice": 240,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461272"
      },
      {
        "id": 6,
        "SNo": 1978,
        "itemId": "DIAR889",
        "itemName": "X Ray Whole Spine Lateral and AP View",
        "type": "Test",
        "Keyword": "X,Ray,Whole,Spine,Lateral",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Whole-Spine-Lateral-and-AP-View-test-cost",
        "minPrice": 560,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461252"
      },
      {
        "id": 7,
        "SNo": 1983,
        "itemId": "DIAR894",
        "itemName": "Yttrium Therapy",
        "type": "Test",
        "Keyword": "Yttrium,Therapy",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "Yttrium-Therapy-test-cost",
        "minPrice": 17500,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461302"
      },
      {
        "id": 8,
        "SNo": 1982,
        "itemId": "DIAR893",
        "itemName": "X Ray Wrist Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Wrist,Lateral,View",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Wrist-Lateral-View-test-cost",
        "minPrice": 120,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461292"
      },
      {
        "id": 9,
        "SNo": 1977,
        "itemId": "DIAR888",
        "itemName": "X Ray Whole Spine AP View",
        "type": "Test",
        "Keyword": "X,Ray,Whole,Spine,AP",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Whole-Spine-AP-View-test-cost",
        "minPrice": 320,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461242"
      },
      {
        "id": 10,
        "SNo": 1976,
        "itemId": "DIAR887",
        "itemName": "X Ray Water View",
        "type": "Test",
        "Keyword": "X,Ray,Water,View,",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Water-View-test-cost",
        "minPrice": 145,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461232"
      },
      {
        "id": 11,
        "SNo": 1975,
        "itemId": "DIAR886",
        "itemName": "X Ray Tm Joint Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Tm,Joint,Lateral",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Tm-Joint-Lateral-View-test-cost",
        "minPrice": 162,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461222"
      },
      {
        "id": 12,
        "SNo": 1974,
        "itemId": "DIAR885",
        "itemName": "X Ray Tm Joint AP View",
        "type": "Test",
        "Keyword": "X,Ray,Tm,Joint,AP",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Tm-Joint-AP-View-test-cost",
        "minPrice": 162,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461212"
      },
      {
        "id": 13,
        "SNo": 1973,
        "itemId": "DIAR884",
        "itemName": "X Ray Tm Joint AP and Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Tm,Joint,AP",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Tm-Joint-AP-and-Lateral-View-test-cost",
        "minPrice": 280,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461202"
      },
      {
        "id": 14,
        "SNo": 1971,
        "itemId": "DIAR882",
        "itemName": "X Ray Thumb Lateral and AP View",
        "type": "Test",
        "Keyword": "X,Ray,Thumb,Lateral,and",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Thumb-Lateral-and-AP-View-test-cost",
        "minPrice": 240,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461182"
      },
      {
        "id": 15,
        "SNo": 1972,
        "itemId": "DIAR883",
        "itemName": "X Ray Thumb Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Thumb,Lateral,View",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Thumb-Lateral-View-test-cost",
        "minPrice": 120,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461192"
      },
      {
        "id": 16,
        "SNo": 1970,
        "itemId": "DIAR881",
        "itemName": "X Ray Thumb AP View",
        "type": "Test",
        "Keyword": "X,Ray,Thumb,AP,View",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Thumb-AP-View-test-cost",
        "minPrice": 120,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461172"
      },
      {
        "id": 17,
        "SNo": 1969,
        "itemId": "DIAR880",
        "itemName": "X Ray Thigh Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Thigh,Lateral,View",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Thigh-Lateral-View-test-cost",
        "minPrice": 120,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461162"
      },
      {
        "id": 18,
        "SNo": 1968,
        "itemId": "DIAR879",
        "itemName": "X Ray Thigh AP View",
        "type": "Test",
        "Keyword": "X,Ray,Thigh,AP,View",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Thigh-AP-View-test-cost",
        "minPrice": 120,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461152"
      },
      {
        "id": 19,
        "SNo": 1967,
        "itemId": "DIAR878",
        "itemName": "X Ray Thigh AP and Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Thigh,AP,and",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Thigh-AP-and-Lateral-View-test-cost",
        "minPrice": 240,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461142"
      },
      {
        "id": 20,
        "SNo": 1966,
        "itemId": "DIAR877",
        "itemName": "X ray Temp",
        "type": "Test",
        "Keyword": "X,ray,Temp",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-ray-Temp-test-cost",
        "minPrice": 0,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461132"
      },
      {
        "id": 21,
        "SNo": 1998,
        "itemId": "DIAR877",
        "itemName": "X ray Temp",
        "type": "Test",
        "Keyword": "X,ray,Temp",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-ray-Temp-test-cost",
        "minPrice": 0,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461132"
      },
      {
        "id": 22,
        "SNo": 4455,
        "itemId": "DIAR877",
        "itemName": "X ray Temp",
        "type": "Test",
        "Keyword": "X,ray,Temp",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-ray-Temp-test-cost",
        "minPrice": 0,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461132"
      },
      {
        "id": 23,
        "SNo": 8787,
        "itemId": "DIAR877",
        "itemName": "X ray Temp",
        "type": "Test",
        "Keyword": "X,ray,Temp",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-ray-Temp-test-cost",
        "minPrice": 0,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461132"
      },
      {
        "id": 24,
        "SNo": 12349,
        "itemId": "DIAR877",
        "itemName": "X ray Temp",
        "type": "Test",
        "Keyword": "X,ray,Temp",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-ray-Temp-test-cost",
        "minPrice": 0,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461132"
      }
    ]
  }
}
```
    # In Order to filter Query You need to pass search parameter in input fields.
    
    # If Filter Pass then Data will be in responce like. You can pass multiple filter same time in one query.

![GetApi With Filters](/getPackageWithFilter.PNG)
```
  # Write your query or mutation here
query getpackages($input:In){
  getPackages(in:$input){
      id
      SNo
      itemId
      itemName
      type
      Keyword
      BestSellers
      testCount
      IncludedTests
      url
      minPrice
      labName
      fasting
      availableAt
      popular
      category
      objectID
  }
}

{
  "input": {
    "itemId": "DIA2044"
  }
}

{
  "data": {
    "getPackages": [
      {
        "id": 2,
        "SNo": 1995,
        "itemId": "DIA2044",
        "itemName": "Eye Test- Vision Express",
        "type": "Test",
        "Keyword": "eye,test",
        "BestSellers": "",
        "testCount": 1,
        "IncludedTests": "",
        "url": "eye_test",
        "minPrice": 49,
        "labName": "Vision Express",
        "fasting": 0,
        "availableAt": 1,
        "popular": "TRUE",
        "category": "path",
        "objectID": "4562"
      }
    ]
  }
}

```

    # 2. userPackages: this Query will get all packages saved by user. User will get only those packages which is saved by him/her.
    
![GetApi For User Saved Packages](/GetUserSavedPackages.PNG)

```

# Write your query or mutation here
{
  userPackages{
      id
      SNo
      itemId
      itemName
      type
      Keyword
      BestSellers
      testCount
      IncludedTests
      url
      minPrice
      labName
      fasting
      availableAt
      popular
      category
      objectID
  }
}

{
  "data": {
    "userPackages": [
      {
        "id": 2,
        "SNo": 1995,
        "itemId": "DIA2044",
        "itemName": "Eye Test- Vision Express",
        "type": "Test",
        "Keyword": "eye,test",
        "BestSellers": "",
        "testCount": 1,
        "IncludedTests": "",
        "url": "eye_test",
        "minPrice": 49,
        "labName": "Vision Express",
        "fasting": 0,
        "availableAt": 1,
        "popular": "TRUE",
        "category": "path",
        "objectID": "4562"
      },
      {
        "id": 3,
        "SNo": 1981,
        "itemId": "DIAR892",
        "itemName": "X Ray Wrist AP View",
        "type": "Test",
        "Keyword": "X,Ray,Wrist,AP,View",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Wrist-AP-View-test-cost",
        "minPrice": 120,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461282"
      },
      {
        "id": 5,
        "SNo": 1980,
        "itemId": "DIAR891",
        "itemName": "X Ray Wrist AP and Lateral View",
        "type": "Test",
        "Keyword": "X,Ray,Wrist,AP,and",
        "BestSellers": "undefined",
        "testCount": 1,
        "IncludedTests": "",
        "url": "X-Ray-Wrist-AP-and-Lateral-View-test-cost",
        "minPrice": 240,
        "labName": "",
        "fasting": 0,
        "availableAt": 2,
        "popular": "false",
        "category": "radio",
        "objectID": "4461272"
      }
    ]
  }
}

```
    
## Mutations

    # 1. addPackage: is used to store package in user's account.
   
![GetApi For Add Packages](/addPackages.PNG)

```
mutation addPackage($input:addPack){
  addPackage(in:$input){
    id
    username
    packageId
  }
}

{
  "input": {
    "username": "imran",
    "packageId": 5
  }
}

{
  "data": {
    "addPackage": {
      "id": 7,
      "username": "imran",
      "packageId": 5
    }
  }
}

```


    # 2. deletePackage: is used to delete package from user's account.
   

![GetApi For Add Packages](/deletePackage.PNG)

```
mutation deletePackage($input:addPack){
  deletePackage(in:$input)
}

{
  "input": {
    "username": "imran",
    "packageId": 2
  }
}

{
  "data": {
    "deletePackage": 1
  }
}


```




