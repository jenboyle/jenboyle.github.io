// import { useMediaQuery } from "@mui/material";
import styles from "./GroovyTab.module.css";
import { GroovyTabType } from "./GroovyTabType";
//import { TheoryType } from "./BassTheoryContent";

type GroovyTabProps = {
  json: GroovyTabType;
  rowBeginning: number;
};

function GroovyTab({ json, rowBeginning }: GroovyTabProps) {
  //const mobile = useMediaQuery("min-width:600px");
  //console.log(mobile);
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          {json[`g${rowBeginning}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.sep}>|</td>
              <td className={styles.tab}>
                <div>{json[`g${rowBeginning}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`g${rowBeginning + 1}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`g${rowBeginning + 1}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`g${rowBeginning + 2}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`g${rowBeginning + 2}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`g${rowBeginning + 3}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`g${rowBeginning + 3}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
        </tr>

        <tr>
          {json[`d${rowBeginning}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.sep}>|</td>
              <td className={styles.tab}>
                <div>{json[`d${rowBeginning}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`d${rowBeginning + 1}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`d${rowBeginning + 1}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`d${rowBeginning + 2}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`d${rowBeginning + 2}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`d${rowBeginning + 3}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`d${rowBeginning + 3}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
        </tr>

        <tr>
          {json[`a${rowBeginning}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.sep}>|</td>
              <td className={styles.tab}>
                <div>{json[`a${rowBeginning}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`a${rowBeginning + 1}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`a${rowBeginning + 1}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`a${rowBeginning + 2}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`a${rowBeginning + 2}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`a${rowBeginning + 3}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`a${rowBeginning + 3}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
        </tr>

        <tr>
          {json[`e${rowBeginning}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.sep}>|</td>
              <td className={styles.tab}>
                <div>{json[`e${rowBeginning}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`e${rowBeginning + 1}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`e${rowBeginning + 1}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`e${rowBeginning + 2}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`e${rowBeginning + 2}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
          {json[`e${rowBeginning + 3}` as keyof GroovyTabType] ? (
            <>
              <td className={styles.tab}>
                <div>{json[`e${rowBeginning + 3}` as keyof GroovyTabType]}</div>
              </td>
              <td className={styles.sep}>|</td>
            </>
          ) : null}
        </tr>
      </tbody>
    </table>
  );
}

export default GroovyTab;
