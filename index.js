// ১. সারার কাছে ২৫টি আপেল আছে এবং সে দোকান থেকে আরও ১৫টি আপেল কিনেছে। সারার মোট কতটি আপেল আছে?

let saraHadApple = 25;

let saraBroughtApple = 15;

let totalApple = saraHadApple + saraBroughtApple;

console.log("The ans is:" + totalApple);


// ২. জনের কাছে ৫০০টাকা ছিল। সে মুদির দোকানে ২০০টাকা খরচ করেছে। এখন জনের কাছে কত টাকা বাকি আছে? 

let jenerHadMoney = 500;

let jenerSpentMoney = 200;

let moneyLeft = jenerHadMoney - jenerSpentMoney;

console.log("The ans is:" + moneyLeft);

// ৩. একটি কারখানা প্রতি ঘণ্টায় ১২০টি মেশিন তৈরি করে। ৮ ঘণ্টায় কারখানাটি মোট কতটি মেশিন তৈরি করবে? 


let machineryPerHour = 120;

let hours = 8;

let totalMachinery = machineryPerHour * hours;

console.log("The ans is:" + totalMachinery);

// ৪. একটি বাগানে প্রতিটি সারিতে ১২টি গাছ আছে এবং মোট ৮টি সারি আছে। বাগান মালিক আরও ২০টি গাছ লাগানোর পরিকল্পনা করছেন। সব মিলিয়ে বাগানে কতটি গাছ থাকবে?

let treePerRow = 12;

let totalRowHave = 8;

let nowtotalTree = treePerRow * totalRowHave;

let treePlanToAdd = 20;


if (treePlanToAdd) {
    let totalTreeAfterAdding = nowtotalTree + treePlanToAdd;
    console.log("The ans is:" + totalTreeAfterAdding);
}
else{
    console.log("The ans is:" + nowtotalTree);
}


// ৫. রহিমের কাছে ৫টি বাক্স আছে, প্রতিটি বাক্সে ১০টি করে কমলা আছে। সে তার বন্ধুকে ১২টি কমলা দিয়েছে। রহিমের কাছে এখন কতটি কমলা আছে? 

let rahimHasBox = 5;

let orangePerBox = 10;

let orange = rahimHasBox * orangePerBox;

let givenOrange = 12;

let orangeAfterGiven = orange - givenOrange;

console.log("The ans is:" + orangeAfterGiven);


// ৬. একটি ট্রেন ১৫০ কিলোমিটার পথ অতিক্রম করতে ৩ ঘণ্টা সময় নেয়। প্রতি ঘণ্টায় ট্রেন কত কিলোমিটার পথ অতিক্রম করে? 

let train = 150;

let takeTime = 3;

let trainPerHour = train / takeTime;

console.log("The ans is:" + trainPerHour);

// ৭. একটি ফ্যাক্টরি ৬টি মেশিন ব্যবহার করে প্রতিদিন ২০০টি পণ্য তৈরি করে। আরও ২টি মেশিন যোগ করলে মোট উৎপাদন কত হবে, এবং যদি ৩টি পণ্য বিক্রি না হয়, অবশিষ্ট পণ্য কয়টি?


let machineHas = 6;

let produceProductPerDay = 200;

let totalProduct = machineHas * produceProductPerDay;

let addedNewMachine = 2;

let productNotSell = 3;

let totalProductAfterAdding = totalProduct + addedNewMachine * produceProductPerDay;

if (addedNewMachine > 0 || productNotSell > 0 ) {
    console.log("The ans is:" + (totalProductAfterAdding - productNotSell));
}
else{
    console.log("The ans is:" + totalProduct);
}

// ৮. একটি দোকানদার ১২০টি চকলেট কিনে প্রতিটি প্যাকেটে ৯টি করে রাখে। সব প্যাকেট পূর্ণ করার পর দোকানদারের কাছে কতটি চকলেট অবশিষ্ট থাকবে? 

let personBroughtChocolate = 120;

let keepChocolatePerPacket = 9;

let needPackets = Math.floor(personBroughtChocolate / keepChocolatePerPacket);

let totalChocolateNeeds = needPackets * keepChocolatePerPacket;

console.log("total Chocolate needs:" + totalChocolateNeeds);

let leftChocolate = personBroughtChocolate - totalChocolateNeeds;

console.log("left Chocolate is:" + leftChocolate);