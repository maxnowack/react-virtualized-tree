import React, { Component } from 'react'
import { Grid, Menu, Segment, Header } from 'semantic-ui-react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import documents from '../docs';
import Doc from '../docs/Doc';
import { getDocumentsPath } from '../toolbelt';
import './ExamplesContainer.css';

export default class ExamplesContainer extends Component {
  render() {    
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              {
                Object.keys(documents).map(path => (
                  <Link to={`/react-virtualized-tree/docs/${path}`} key={path}>
                    <Menu.Item
                      name={documents[path].name}
                      active={this.props.location.pathname === `/react-virtualized-tree/docs/${path}`} 
                    />
                  </Link>)
                )
              }
            </Menu>
          </Grid.Column>

          <Grid.Column width={10} heigth={1000}>
              <Route
                path="/react-virtualized-tree/docs/:document" 
                component={Doc}
              />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}