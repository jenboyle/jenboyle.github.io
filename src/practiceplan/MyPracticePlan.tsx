import GroovyHeader from "../components/general/GroovyHeader";
import { useLocalStorageState } from "./useLocalStorageState";
import { LuListMusic } from "react-icons/lu";
import { IoTrash } from "react-icons/io5";
import { FaBucket } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import styles from "./MyPracticePlan.module.css";
import { ChangeEvent, useState } from "react";
import Help from "../components/games/common/Help";
import { practiceBucketIdeas } from "./practiceBucketIdeas";
import HelpContent from "../components/games/common/HelpContent";
//import HelpContent from "./common/HelpContent";

function MyPracticePlan() {
  const [value, setValue] = useLocalStorageState("[]", "practice");
  const [itemText, setItemText] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [helpRand, setHelpRand] = useState("Bass Chords");

  const valArr = JSON.parse(value);

  function handleFreshPlan() {
    setValue("[]");
  }

  function handleHelp() {
    const pbi = Math.floor(Math.random() * practiceBucketIdeas.length);
    setHelpRand(practiceBucketIdeas[pbi]);
    setShowHelp(!showHelp);
  }

  function deleteGoal(goal: string) {
    //valArr.pop(index);
    const itemIndex = valArr.indexOf(goal);
    if (itemIndex > -1) {
      valArr.splice(itemIndex, 1);
      setValue(JSON.stringify(valArr));
    }
  }

  function santise(item: string) {
    return item.replace(/[^a-z0-9 #]/gi, "");
  }

  function handleItemChange(e: ChangeEvent<HTMLInputElement>) {
    setItemText(santise(e.target.value));
  }

  function handleAddItem() {
    if (valArr.length < 10) {
      const santisedText = santise(itemText);
      if (santisedText !== "") {
        valArr.push(santisedText);
        setValue(JSON.stringify(valArr));
        setItemText("");
      }
    }
    // else {
    // }

    //console.log(valArr);
  }

  //{value}

  return (
    <>
      <GroovyHeader>My Practice Plan</GroovyHeader>
      <div>
        <Tooltip placement="left" title="Fresh Practice Plan">
          <span>
            <LuListMusic onClick={handleFreshPlan} />
          </span>
        </Tooltip>
      </div>
      <div className={styles.additem}>
        <input
          type="text"
          onChange={handleItemChange}
          maxLength={25}
          placeholder="Enter goal here..."
          value={itemText}
        ></input>
      </div>

      <div>
        <Tooltip title="Add up to 10 Goals">
          <span>
            <button
              className={
                valArr.length == 10
                  ? `${styles.buttondisabled}`
                  : `${styles.button}`
              }
              disabled={valArr.length == 10 ? true : false}
              onClick={handleAddItem}
            >
              Add Goal
            </button>
          </span>
        </Tooltip>
      </div>

      <div>
        {valArr.length > 0
          ? valArr.map((item: string, index: number) => (
              <div key={`div${item}${index}`} className={styles.item}>
                <input
                  type="checkbox"
                  key={`check${item}${index}`}
                  value={item}
                  className={styles.itembox}
                ></input>
                <span>{item}</span>

                <Tooltip title="Delete Goal">
                  <span
                    className={styles.trash}
                    onClick={() => deleteGoal(item)}
                  >
                    <IoTrash color="red" />
                  </span>
                </Tooltip>
              </div>
            ))
          : null}
      </div>

      <div>
        <Help handleHelp={handleHelp}>
          <Tooltip placement="left" title="Bass Practice Ideas">
            <span>
              <FaBucket color="#f4f44f" />
            </span>
          </Tooltip>
        </Help>

        {showHelp ? (
          <span>
            <HelpContent>{helpRand}</HelpContent>
          </span>
        ) : null}
      </div>
    </>
  );
}

export default MyPracticePlan;
