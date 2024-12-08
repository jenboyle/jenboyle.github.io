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
      {tab.map((table, tindex) => (
        <table key={`table_${tindex}`} className={styles.table}>
          {table.table.map((row, index) => (
            <>
              {row.text && (
                <caption
                  key={`caption_${tindex}_${index}`}
                  className={styles.leftdiv}
                >
                  {row.text}
                </caption>
              )}
              <tbody key={`tbod_${tindex}_${index}`}>
                <tr key={`tr_g_${tindex}_${index}`}>
                  <td key={`td_g_sep${tindex}_${index}`} className={styles.sep}>
                    |
                  </td>
                  {row.g.map((gthing, gindex) => (
                    <>
                      <td
                        key={`td_g_${tindex}_${index}_${gindex}`}
                        className={styles.tab}
                      >
                        <div key={`div_g_${tindex}_${index}_${gindex}`}>
                          {gthing.g}
                        </div>
                      </td>
                      <td
                        key={`td_gsep_${tindex}_${index}_${gindex}`}
                        className={styles.sep}
                      >
                        |
                      </td>
                    </>
                  ))}
                </tr>

                <tr key={`tr_d_${tindex}_${index}`}>
                  <td key={`td_d_sep${tindex}_${index}`} className={styles.sep}>
                    |
                  </td>
                  {row.d.map((dthing, dindex) => (
                    <>
                      <td
                        key={`td_d_${tindex}_${index}_${dindex}`}
                        className={styles.tab}
                      >
                        <div key={`div_d_${tindex}_${index}_${dindex}`}>
                          {dthing.d}
                        </div>
                      </td>
                      <td
                        key={`td_dsep_${tindex}_${index}_${dindex}`}
                        className={styles.sep}
                      >
                        |
                      </td>
                    </>
                  ))}
                </tr>

                <tr key={`tr_a_${tindex}_${index}`}>
                  <td key={`td_a_sep${tindex}_${index}`} className={styles.sep}>
                    |
                  </td>
                  {row.a.map((athing, aindex) => (
                    <>
                      <td
                        key={`td_a_${tindex}_${index}_${aindex}`}
                        className={styles.tab}
                      >
                        <div key={`div_a_${tindex}_${index}_${aindex}`}>
                          {athing.a}
                        </div>
                      </td>
                      <td
                        key={`td_asep_${tindex}_${index}_${aindex}`}
                        className={styles.sep}
                      >
                        |
                      </td>
                    </>
                  ))}
                </tr>

                <tr key={`tr_e_${tindex}_${index}`}>
                  <td key={`td_e_sep${tindex}_${index}`} className={styles.sep}>
                    |
                  </td>
                  {row.e.map((ething, eindex) => (
                    <>
                      <td
                        key={`td_e_${tindex}_${index}_${eindex}`}
                        className={styles.tab}
                      >
                        <div key={`div_e_${tindex}_${index}_${eindex}`}>
                          {ething.e}
                        </div>
                      </td>
                      <td
                        key={`td_esep_${tindex}_${index}_${eindex}`}
                        className={styles.sep}
                      >
                        |
                      </td>
                    </>
                  ))}
                </tr>
                <tr
                  key={`tr_space_${tindex}_${index}`}
                  className={styles.spacer}
                />
              </tbody>
            </>
          ))}
        </table>
      ))}
    </>
  );
}

export default GroovyTabV2;
