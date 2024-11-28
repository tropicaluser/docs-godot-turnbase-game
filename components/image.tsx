// Example from https://beta.reactjs.org/learn

export default function MyImage(props) {
    const { testImage, testImageTwo } = props;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <img 
                    src={testImage} 
                    alt="Battle Scene"  
                />
                <img 
                    src={testImageTwo} 
                    alt="Battle Scene"
                />
            </div>
        </div>
    );
}


