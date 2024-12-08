// import { useMediaQuery } from "@mui/material";
import { GroovyTabTableType } from "../songs/Song";
import styles from "./GroovyTabV2.module.css";
//import { TheoryType } from "./BassTheoryContent";

type GroovyTabProps = {
  tab: GroovyTabTableType[];
};

function GroovyTabV2({ tab }: GroovyTabProps) {
  //const mobile = useMediaQuery("min-width:600px");
  //console.log(mobile);
  return (
    <>
      {tab.map((table) => (
        <table className={styles.table}>
          {table.table.map((rowy) => (
            <>
              {rowy.text && (
                <caption className={styles.leftdiv}>{rowy.text}</caption>
              )}
              <tbody>
                <tr>
                  <td className={styles.sep}>|</td>
                  {rowy.g.map((gthing) => (
                    <>
                      <td className={styles.tab}>
                        <div>{gthing.g}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </>
                  ))}
                </tr>

                <tr>
                  <td className={styles.sep}>|</td>
                  {rowy.d.map((dthing) => (
                    <>
                      <td className={styles.tab}>
                        <div>{dthing.d}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </>
                  ))}
                </tr>

                <tr>
                  <td className={styles.sep}>|</td>
                  {rowy.a.map((athing) => (
                    <>
                      <td className={styles.tab}>
                        <div>{athing.a}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </>
                  ))}
                </tr>

                <tr>
                  <td className={styles.sep}>|</td>
                  {rowy.e.map((ething) => (
                    <>
                      <td className={styles.tab}>
                        <div>{ething.e}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </>
                  ))}
                </tr>
                <tr className={styles.spacer} />
              </tbody>
            </>
          ))}
        </table>
      ))}
    </>
  );
}

export default GroovyTabV2;
