import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'

import FieldWrapper from 'src/components/Fields/FieldWrapper'

export type AsyncMultiSelectFieldProps = {
  readonly name: string
  readonly label: string
}

type OptionType = {
  readonly title: string
  readonly id: number
} & Record<string, unknown>

const defaultValue: OptionType[] = []

const testResponse = [
  { id: 1, title: 'Interesting' },
  { id: 2, title: 'Very good' }
]

function AsyncMultiSelectField ({ name, label }: AsyncMultiSelectFieldProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState<OptionType[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    let active = true

    if (open) {
      (async () => {
        try {
          setLoading(true)
          const response = await new Promise<OptionType[]>(resolve => {
            setTimeout(() => {
              resolve(testResponse)
            }, 2000)
          })

          if (active) {
            setOptions(response)
            setLoading(false)
          }
        } finally {}
      })()
    }

    return () => {
      active = false
      setOptions([])
    }
  }, [open, value])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getOptionLabel = (option: OptionType) => {
    return option.title
  }

  return (
    <FieldWrapper name={name}>
      {({ input }) => {
        const handleChange = (event: SyntheticEvent<Element, Event>, newValue: OptionType[]) => {
          input.onChange(newValue)
        }

        return (
          <Autocomplete
            multiple={true}
            options={options}
            onOpen={handleOpen}
            onClose={handleClose}
            onChange={handleChange}
            onInputChange={(event, value) => setValue(value)}
            getOptionLabel={getOptionLabel}
            loading={loading}
            value={(input.value || defaultValue) as unknown as OptionType[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color={'inherit'} size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />
        )
      }}
    </FieldWrapper>
  )
}

export default AsyncMultiSelectField
