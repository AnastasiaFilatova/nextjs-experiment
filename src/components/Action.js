import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Icon from './Icon';
import Image from 'next/image'

export default class Action extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        let action_style = _.get(action, 'style', null) || 'link';
        let action_icon_pos = _.get(action, 'icon_position', null) || 'right';
        return (
            <Link href="https://fivexl.io">
                <Link className="navbar__logo m-0" href={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'data.config.header.logo', null))} alt={_.get(this.props, 'data.config.header.logo_alt', null)} /></Link>
            </Link>
        );
    }
}
