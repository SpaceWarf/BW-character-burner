import React from "react";
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import {
  getSuperficialTolerance,
  getMortalWoundScore
} from '#Utilities/redux-selectors.js';

class PhysicalTolerancesTable extends React.Component {
  constructor(props) {
    super(props);
  }

  generateToleranceSpread() {
    const {
      superficialTolerance,
      mortalWoundScore,
      forte
    } = this.props;

    const spread = [];
    const spreadDistance = Math.ceil(forte / 2) + 1;

    let tolerances = [
      {
        name: "Su",
        index: superficialTolerance
      },
      {
        name: "Li",
        index: Math.min(superficialTolerance + spreadDistance, mortalWoundScore),
        requiredSpacesAfter: 4
      },
      {
        name:"Mi",
        index: Math.min(superficialTolerance + (2 * spreadDistance), mortalWoundScore),
        requiredSpacesAfter: 3
      },
      {
        name: "Se",
        index: Math.min(superficialTolerance + (3 * spreadDistance), mortalWoundScore),
        requiredSpacesAfter: 2
      },
      {
        name: "Tr",
        index: Math.min(superficialTolerance + (4 * spreadDistance), mortalWoundScore),
        requiredSpacesAfter: 1
      },
      {
        name: "Mo",
        index: mortalWoundScore
      }
    ];

    tolerances = tolerances.map((tolerance) => {
      if (!tolerance.requiredSpacesAfter) {
        return tolerance;
      }

      if (mortalWoundScore - tolerance.index < tolerance.requiredSpacesAfter) {
        return {
          ...tolerance,
          index: mortalWoundScore - tolerance.requiredSpacesAfter
        };
      }

      return tolerance;
    });

    for (let i = 0; i < 16; i++) {
      const foundTolerance = tolerances.find(tolerance => tolerance.index === i + 1);
      spread.push(foundTolerance ? foundTolerance.name : "");
    }

    return spread;
  }

  render() {
    const headerCells = [];
    const cells = [];

    this.generateToleranceSpread().forEach((tolerance, index) => {
      headerCells.push(
        <Table.HeaderCell key={"B" + index + 1}>B{index + 1}</Table.HeaderCell>
      );
      cells.push(
        <Table.Cell key={"B" + index + 1}>{tolerance}</Table.Cell>
      );
    });

    return (
      <Table className="ToleranceTable" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Coordinate</Table.HeaderCell>
            {headerCells}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Tolerance</Table.Cell>
            {cells}
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
};

const mapStateToProps = state => ({
  superficialTolerance: getSuperficialTolerance(state),
  mortalWoundScore: getMortalWoundScore(state),
  forte: state.editor.stats.selectedStats.forte
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalTolerancesTable);