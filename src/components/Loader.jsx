import { Ring } from '@uiball/loaders'


export const Loader = () => {
    return (
        <div className="container-loader">
            <Ring
                size={70}
                lineWeight={5}
                speed={5}
                color="black"
            />
        </div>
    )
};
