import React, { Component } from 'react';
import * as service from '../../services/getService';
import DetailContent from '../../components/Content/DetailContent';
import DetailContentContainer from './DetailContentContainer';
import DetailImageContainer from './DetailImageContainer';

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentId: '',
            contentTypeId: ''
        };
    }

    settingState = (props) => {
        let params = props.match.params;
        this.setState({
            contentId: params.contentId,
            contentTypeId: params.contentTypeId,
        })
    }

    componentDidMount() {
        this.settingState(this.props);
    }

    render() {
        return (
            <div>
                <DetailImageContainer contentId={this.state.contentId} contentTypeId={this.state.contentTypeId} />
                <DetailContentContainer contentId={this.state.contentId} />
            </div>
        );
    }
}

export default DetailContainer;