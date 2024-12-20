
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(profile: Profile, partial: Partial<Profile>): Profile {
    return { ...profile, ...partial };
  }
  

//   const myProfile : Profile = { name: "Alice", age: 25, email: "alice@example.com" };
  
//   const result = updateProfile(myProfile, { email: "updated@example.com" });
  
//   console.log(result);

  

