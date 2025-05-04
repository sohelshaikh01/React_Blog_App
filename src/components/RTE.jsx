import { Editor } from "@tinymce/tinymce-react";
import { Controller } from 'react-hook-form';

// control pass control where it is using
export default function RTE({name, control, label, defaultValue = ""}) {

  return (
   <div> {label && <label className='text-sm text-gray-600'> {label} </label>} 
    
    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='b67tjzcijnqii3ob6ss7hui6mte6tqcl19xbunzjzwptu0e1'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [ "image", "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "code", "help", "wordcount", "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />
   
   </div>

    // It is earlier form of above
    // < Editor
    // intialValue="default value"
    // init={
    //     { branding: false,
    //         height: 500,
    //         menubars: true,
    //         plugins: [
    //             'advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'
    //         ],
    //         toolbar: 
    //             'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bullshit numlist outdent indent | removeformat | help'
    //     } 
    // } />

  )
}

