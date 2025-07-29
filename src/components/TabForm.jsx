import { act, useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

export default TabForm = () => {
  const [data, setData] = useState({
    name: "Kushagra",
    age: "20",
    email: "kushagra@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    //this is config driven Ui - if
    //something else comes, then we can write here

    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.name = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.name = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.email || err.age ? false : true;
      },
    },

    {
      name: "Interests",
      component: Interests,
      validate: () => {
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevState) => prevState + 1);
    }
  };
  const handlePrevClick = () => {
    // if (tabs[activeTab].validate()) {
    setActiveTab((prevState) => prevState - 1);
    // }
  };
  const handleSubmitClick = () => {
    //Do something
    console.log(data);
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};
