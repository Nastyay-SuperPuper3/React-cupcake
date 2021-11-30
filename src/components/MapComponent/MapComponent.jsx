import React from "react";
import ReactDOM from "react-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapState = {
    center: [55.76, 37.64],
    zoom: 10,
    controls: []
};

class MapComponent extends React.Component {
    state = {
        placemarks: []
    };

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    onYmapsLoad = ymaps => {
        this.ymaps = ymaps;
        new this.ymaps.SuggestView(this.input.current).events.add(
            "select",
            this.onSuggestSelect
        );
    };

    onSuggestSelect = e => {
        const name = e.get("item").value;
        this.ymaps.geocode(name).then(result => {
            const coord = result.geoObjects.get(0).geometry.getCoordinates();
            this.setState(state => ({
                placemarks: [
                    ...state.placemarks,
                    {
                        name,
                        coord
                    }
                ]
            }));
            this.map.panTo(coord);
        });
    };

    onPlaceClick = e => {
        console.log(this.mmap);
        const index = +e.target.dataset.index;
        this.map.panTo(this.state.placemarks[index].coord);
    };

    render() {
        const { placemarks } = this.state;

        return (
            <div>
                <input ref={this.input} placeholder="Где вы находитесь?" />
                <YMaps query={{ load: "package.full" }}>
                    <Map
                        state={mapState}
                        onLoad={this.onYmapsLoad}
                        instanceRef={map => (this.map = map)}
                        width="100%"
                    >
                        {placemarks.map(n => (
                            <Placemark geometry={n.coord} />

                        ))}
                    </Map>
                </YMaps>
                <ul>
                    {placemarks.map((n, i) => (
                        <li data-index={i} onClick={this.onPlaceClick}>
                            {n.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<MapComponent />, document.getElementById("root"));
export default MapComponent;
