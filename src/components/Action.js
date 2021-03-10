import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Icon from './Icon';

export default class Action extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        let action_style = _.get(action, 'style', null) || 'link';
        let action_icon_pos = _.get(action, 'icon_position', null) || 'right';
        return (
            <Link className="navbar__logo m-0" href="https://fivexl.io">
                <img src="" alt={_.get(this.props, 'data.config.header.logo_alt', null)} />
            </Link>
        );
    }
}
