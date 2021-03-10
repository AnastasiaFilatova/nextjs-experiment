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
                <Image src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
            </Link>
        );
    }
}
