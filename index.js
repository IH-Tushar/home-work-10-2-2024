// সারার কাছে ২৫টি আপেল আছে এবং সে দোকান থেকে আরও ১৫টি আপেল কিনেছে। সারার মোট কতটি আপেল আছে?

let saraHadApple = 25;

let saraBroughtApple = 15;

let totalApple = saraHadApple + saraBroughtApple;

console.log("The ans is:" + totalApple);

// জেনের কাছে ৫০০টাকা ছিল। সে মুদির দোকানে ২০০টাকা খরচ করেছে। এখন জেনের কাছে কত টাকা বাকি আছে?
let jenerHadMoney = 500;

let jenerSpentMoney = 200;

let moneyLeft = jenerHadMoney - jenerSpentMoney;

console.log("The ans is:" + moneyLeft);

// একটি কারখানা প্রতি ঘণ্টায় ২০টি মেশিন তৈরি করে। ৮ ঘণ্টায় কারখানাটি মোট কতটি মেশিন তৈরি করবে?

let machineryPerHour = 20;

let hours = 8;

let totalMachinery = machineryPerHour * hours;

console.log("The ans is:" + totalMachinery);

// একটি বাগানে প্রতি সারিতে ৮টি গাছ আছে এবং ১০টি সারি আছে। বাগান মালিক আরও ২০টি গাছ লাগানোর পরিকল্পনা করেছেন। সব মিলিয়ে বাগানে কতটি গাছ থাকবে?
let treePerRow = 8;

let totalRowHave = 10;

let nowtotalTree = treePerRow * totalRowHave;

let treePlanToAdd = 0;


if (treePlanToAdd) {
    let totalTreeAfterAdding = nowtotalTree + treePlanToAdd;
    console.log(totalTreeAfterAdding);
}
else{
    console.log("The ans is:" + nowtotalTree);
}


// রহিমের কাছে ৫টি বাসা আছে, এবং প্রতিটি বাসায় কমলা আছে। সে তার বন্ধুকে ১টি কমলা দিয়েছে। রহিমের কাছে এখন কতটি কমলা আছে?

let house = 5;

let orangePerHouse = 1;

let orange = house * orangePerHouse;

let donateOrange = 1;

let orangeAfterDonate = orange - donateOrange;

console.log("The ans is:" + orangeAfterDonate);


// একটি ট্রেন ১৫০ কিলোমিটার পথ অতিক্রম করতে ২ ঘণ্টা সময় নেয়। প্রতি ঘণ্টায় ট্রেন কত কিলোমিটার পথ অতিক্রম করে?

let train = 150;

let time = 2;

let trainPerHour = train / time;

console.log("The ans is:" + trainPerHour);

// একটি ফ্যাক্টরি ৫টি মেশিন ব্যবহার করে প্রতিদিন ২০০টি পণ্য তৈরি করে। আরও ৫টি মেশিন যোগ করলে কত পণ্য উৎপাদন হবে, এবং যদি পণ্যের চাহিদা না থাকে, অবিক্রিত পণ্য কতটি?
let machineHas = 5;

let produceProductPerDay = 200;

let totalProduct = machineHas * produceProductPerDay;

let addedNewMachine = 5;

let totalProductAfterAdding = totalProduct + addedNewMachine * produceProductPerDay;

if (addedNewMachine) {
    console.log("The ans is:" + totalProductAfterAdding);
}
else{
    console.log("The ans is:" + totalProduct);
}

// একটি দোকানের ৩টি চকলেট প্যাকেটে ৬টি চকলেট থাকে। সব প্যাকেট পূর্ণ করার পর দোকানদারের কাছে কতটি চকলেট অবশিষ্ট থাকবে?

// i don't understand the question 🤔