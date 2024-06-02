import { Box, TextField } from '@mui/material';
import CommonPage from '../../../Molecule/common-page/common-page';
import { LoadingButton } from '@mui/lab';
import useAction from './update.hooks';

export default function Create() {
    const {
        formValues,
        handleSubmit,
        loadingSubmit,
        setFormValues,
        data
    } = useAction();
    console.log(data);
    return (
        <CommonPage
            withBack
            component={'form'}
            title="Create new Book"
            actionElement={
                <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={loadingSubmit}
                >
                    Submit
                </LoadingButton>
            }
            onSubmit={handleSubmit}
        >
            <Box
                sx={{
                    width: '50%',
                }}
            >
                <TextField
                    name="title"
                    size="small"
                    sx={{ width: '100%', mb: 3 }}
                    label="Title"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            title: e.target.value,
                        })
                    }
                    variant="filled"
                    placeholder={data?.title}
                    value={formValues?.title}
                />
                <TextField
                    name="genre"
                    size="small"
                    sx={{ width: '100%', mb: 3 }}
                    label="Genre"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            genre: e.target.value,
                        })
                    }
                    variant="filled"
                    placeholder={data?.genre}
                    value={formValues?.genre}
                />
                <TextField
                    name="publisher"
                    size="small"
                    sx={{ width: '100%', mb: 3 }}
                    label="Publisher"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            publisher: e.target.value,
                        })
                    }
                    variant="filled"
                    placeholder={data?.publisher}
                    value={formValues?.publisher}

                />
                <TextField
                    name="author"
                    size="small"
                    sx={{ width: '100%', mb: 3 }}
                    label="Author"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            author: e.target.value,
                        })
                    }
                    variant="filled"
                    placeholder={data?.author}
                    value={formValues?.author}
                />
                <TextField
                    name="book_number"
                    size="small"
                    sx={{ width: '100%', mb: 3 }}
                    label="Book Number"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            book_number: Number(e.target.value),
                        })
                    }
                    variant="filled"
                    placeholder={data?.book_number}
                    value={formValues?.book_number}
                />
                <TextField
                    name="publication_date"
                    size="small"
                    sx={{ width: '100%', mb: 3 }}
                    label="Publication Date"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            publication_date: e.target.value,
                        })
                    }
                    variant="filled"
                    placeholder={data?.publication_date}
                    value={formValues?.publication_date}
                />
                <TextField
                    name="status"
                    size="small"
                    sx={{ width: '100%', mb: 3 }}
                    label="Status"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            status: e.target.value,
                        })
                    }
                    variant="filled"
                    placeholder={data?.status}
                    value={formValues?.status}
                />
            </Box>
        </CommonPage>
    );
}
