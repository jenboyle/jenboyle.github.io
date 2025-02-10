// import { useMediaQuery } from "@mui/material";
import React from "react";
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
        <table key={`table_${table.tableid}`} className={styles.table}>
          {table.table.map((row, index) => (
            <React.Fragment key={`test_${table.tableid}_${index}`}>
              {row.text && (
                <caption className={styles.leftdiv}>{row.text}</caption>
              )}
              <tbody>
                <tr>
                  <td className={styles.sep}>|</td>
                  {row.g.map((gthing, gindex) => (
                    <React.Fragment
                      key={`testg_${table.tableid}_${index}_${gindex}`}
                    >
                      <td className={styles.tab}>
                        <div>{gthing.g}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </React.Fragment>
                  ))}
                </tr>

                <tr>
                  <td className={styles.sep}>|</td>
                  {row.d.map((dthing, dindex) => (
                    <React.Fragment
                      key={`testd_${table.tableid}_${index}_${dindex}`}
                    >
                      <td className={styles.tab}>
                        <div>{dthing.d}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </React.Fragment>
                  ))}
                </tr>

                <tr>
                  <td className={styles.sep}>|</td>
                  {row.a.map((athing, aindex) => (
                    <React.Fragment
                      key={`testa_${table.tableid}_${index}_${aindex}`}
                    >
                      <td className={styles.tab}>
                        <div>{athing.a}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </React.Fragment>
                  ))}
                </tr>

                <tr>
                  <td className={styles.sep}>|</td>
                  {row.e.map((ething, eindex) => (
                    <React.Fragment
                      key={`teste_${table.tableid}_${index}_${eindex}`}
                    >
                      <td className={styles.tab}>
                        <div>{ething.e}</div>
                      </td>
                      <td className={styles.sep}>|</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr className={styles.spacer} />
              </tbody>
            </React.Fragment>
          ))}
        </table>
      ))}
    </>
  );
}

export default GroovyTabV2;
