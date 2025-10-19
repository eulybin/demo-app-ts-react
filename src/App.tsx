import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';

function App() {
    const handleSave = (data: unknown) => {
        const extractedData = data as {
            name: string;
            age: string;
        };
        console.log(extractedData);
    };

    return (
        <main>
            <Form onSave={handleSave}>
                <Input id='name' label='Name' type='text' />
                <Input id='age' label='Age' type='number' />
                <p>
                    <Button elem='button'>Save</Button>
                </p>
            </Form>
        </main>
    );
}

export default App;
