import { useEffect } from 'react';
import {
  EControlStatus,
  IMAGE_TYPES,
  MbInput,
  MbAmountInput,
  MbChip,
  MbInputTags,
  MbMediaImport,
  MbText,
  MbTextArea,
} from 'mintbase-ui';
import { useFormContext } from 'react-hook-form';
import { EInputType } from '../types/types';
import { tags } from '../config/constants';
import Container from 'react-bootstrap/Container';

function MintForm() {
  const {
    register,
    watch,
    setValue,
    getValues,
    setError,
    clearErrors,
  } = useFormContext();

  const uploadFile = (file: File) => {
    setValue(EInputType.MAIN_IMAGE, file);
    clearErrors(EInputType.MAIN_IMAGE);
  };

  const removeFile = () => {
    setValue(EInputType.MAIN_IMAGE, null);
    setError(
      EInputType.MAIN_IMAGE,
      {
        type: 'required',
        message: 'No image',
      },
      { shouldFocus: true },
    );
  };

  const handleSelectCategory = (value: string) => {
    const currentValue = getValues(EInputType.CATEGORY);
    if (value === currentValue) {
      setValue(EInputType.CATEGORY, null);
      return;
    }
    setValue(EInputType.CATEGORY, value);
  };

  useEffect(() => {
    setError(
      EInputType.MAIN_IMAGE,
      {
        type: 'required',
        message: 'No image',
      },
      { shouldFocus: true },
    );
  }, [setError]);

  return (
    <>
    <div>
      <div className="mb-4">
        <MbInput
          controlStatus={EControlStatus.NORMAL}
          label="Name of Product"
          placeholder="Name of Product"
          required
          {...register(EInputType.TITLE, {
            required: true,
            minLength: { value: 1, message: '' },
          })}
        />
      </div>
      <div className="mb-4">
        <MbTextArea
          controlStatus={EControlStatus.NORMAL}
          label="Description"
          placeholder="Token description"
          {...register(EInputType.DESCRIPTION, {
            required: true,
          })}
        />
      </div>
      <div className="mb-4">
        <MbText className="p-med-90 mb-4">Upload Image of Product</MbText>
        <MbMediaImport
          {...register(EInputType.MAIN_IMAGE, {
            required: true,
            validate: () => true,
          })}
          acceptedFormats={IMAGE_TYPES}
          handleFileAdd={uploadFile}
          handleFileRemove={removeFile}
          idealDimensions="1:1"
          maxFileSize={5}
          uploadedFile={watch(EInputType.MAIN_IMAGE)}
        />
      </div>
      <div className="mb-4">
        <MbText className="p-med-90 mb-4">Number of Products Manufactured</MbText>
        <MbAmountInput
          maxAmount={50}
          onBlur={(e) => {
            e.preventDefault();
            setValue(EInputType.MINT_AMOUNT, e.target.value);
          }}
          onValueChange={(amount) => {
            setValue(EInputType.MINT_AMOUNT, amount);
          }}
        />
      </div>
      <div className="mb-4">
        <MbText className="p-med-90 mb-4">Category</MbText>
        <div className="flex pt-4 gap-4 overflow-scroll w-full no-scrollbar">
          {Object.keys(tags).map((tag) => (
            <MbChip
              key={`${tag}`}
              isChecked={watch(EInputType.CATEGORY) === tag}
              handleClick={() => handleSelectCategory(tag)}
              disabled={false}
              label={tags[tag as keyof typeof tags]}
              {...register('categories')}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <MbInputTags
          label="Tags"
          maxTags={4}
          placeholder="Add up to 4 tags to improve discoverability"
          onTagsChange={(tagGroup) => {
            setValue(EInputType.TAGS, tagGroup);
          }}
          onMaxTags={() => console.log('mx')}
        />
      </div>
      </div>
    </>
  );
}

export default MintForm;
