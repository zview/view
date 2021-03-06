import format from '../util/date';

export default function (val) {
    if (!val) return '';
    return format.formatDate.format(new Date(val), 'yyyy-MM-dd');
};
