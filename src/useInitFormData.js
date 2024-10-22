import {useMemo} from 'react';
import transform from "lodash/transform";

const useInitFormData = ({data}) => {
    return useMemo((() => transform(data, (result, value, key) => {
        result[key] = value.default;
    }, {})), [data]);
};

export default useInitFormData;
