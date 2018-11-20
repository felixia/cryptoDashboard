import React from 'react';
import highchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme'; 

ReactHighCharts.Highcharts.setOptions(HighchartsTheme);


export default function(){
	return (
		<AppContext.Consumer>
		{ ({historical}) =>
			<Tile>
				{historical ? 
					<ReactHighCharts config={highchartsConfig(historical)}/>
					: <div>Loading Historical data</div>
				}
			</Tile>
		}


		</AppContext.Consumer>


		)
}
