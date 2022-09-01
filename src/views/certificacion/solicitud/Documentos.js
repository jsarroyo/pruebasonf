import { Card } from "mdi-material-ui";
import FileUploaderMultiple from "src/views/forms/form-elements/file-uploader/FileUploaderMultiple";

const Documentos = () => {
	return ( <>
		<Card
			title="Subir documentos"
			>
			<FileUploaderMultiple />
		</Card>
	</> );
}
 
export default Documentos;