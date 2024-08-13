import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && <label htmlFor={name} className='block mb-2 font-medium text-gray-700'>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <Editor
                        {...field}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: "image advlist autolink lists link charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
                            toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={(content, editor) => {
                            field.onChange(content);
                        }}
                    />
                )}
            />
        </div>
    );
}
